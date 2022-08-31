import React from "react";
import Input from "./component/Input";
import TextArea from "./component/TextArea";
import Card from "./component/Card";
import Button from "./component/Button";

export default function App() {
  const [values, setValues] = React.useState({
    id: "",
    title: "",
    body: "",
    avd: "",
    archived: false,
    createdAt: "",
  });

  const [catatan, setCatatan] = React.useState([]);
  const [error, setError] = React.useState({});
  const [formError, setFormError] = React.useState("");

  const handleChange = (e) => {
    setValues((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
    setFormError("");

    handleBlur(e);
  };

  const handleBlur = (e) => {
    console.log("error");
    if (e.target.value === "") {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: true,
        };
      });
    } else {
      setError((error) => {
        return {
          ...error,
          [e.target.name]: false,
        };
      });
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const hslFilter = catatan.filter((item) => {
      return item.id !== parseInt(e.target.value);
    });

    setCatatan(()=>{
      return hslFilter;
    });

    console.log('hasil filter',hslFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setValues({
      id: "",
      title: "",
      body: "",
      avd: "",
      archived: false,
      createdAt: "",
    });

    if (values.title === "" || values.body === "" || values.avd > 2022 || values.avd < 2020) {
      setFormError("form wajib diisi");

      if (values.title === "") {
        setError((error) => {
          return {
            ...error,
            title: true,
          };
        });
      }
      if (values.body === "") {
        setError((error) => {
          return {
            ...error,
            body: true,
          };
        });
      }
      if (values.avd > 2022){
        setError((error)=>{
          return {
            ...error,
            avd: true,
          }
        })
      }
      if (values.avd < 2020){
        setError((error)=>{
          return {
            ...error,
            avd: true,
          }
        })
      }
      return;
    }

    setCatatan((catatan) => {
      return [...catatan, values];
    });
  };
  console.log("catatan", catatan);
  return (
    <div className="w-screen mih-h-screen text-gray-500 p-5 space-y-5">
      <div className="grid drid-cols-5 border-b-2 py-2">
        <h1 className="text-2xl">Notes</h1>
        <div className="col-start-5">
          <Input placeholder="cari catatan" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <div className="flex items-center justify center"></div>
        <div className="col-span-1 flex items-center justify center">
          <form onSubmit={handleSubmit} className="space-y-2">
            <p className="text-red-500 italic">{formError}</p>
            <h1 className="text-xl">Buat Catatan</h1>
            <Input
              name={"title"}
              value={values.title}
              title={"Judul"}
              placeholder="Judul"
              onChange={handleChange}
              onBlur={handleBlur}
              error={error.title}
            />
            <TextArea
              name={"body"}
              value={values.body}
              title={"body"}
              placeholder="catatan"
              onChange={handleChange}
              onBlur={handleBlur}
              error={error.body}
            />
            <Input
            name={"avd"}
            value={values.avd}
            placeholder={"Tahun terbit"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={error.avd}
            type='number'
            />
            <Button title="simpan" />
          </form>
        </div>

        <div className="col-span-1 overflow-auto w-full px-5 py-3 border h-96">
          <h1 className="text-xl font-bold">Daftar Catatan</h1>
          {catatan.length === 0 ? (
            <div>Tidak ada catatan</div>
          ) : (
            catatan.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    title={item.title}
                    body={item.body}
                    avd={item.avd}
                    id={item.id}
                    handleDelete={handleDelete}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
