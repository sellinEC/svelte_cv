  import * as yup from 'yup';
  let values = {
    name: "",
    subject: "",
    message: "",
    email: "",
    hobby:"",
    checkbox: false,
  };

  const schema = yup.object.shape({
    email: yup.string().required("email required")
    .email("Please provide valid email"),
    name: yup.string().required("Please provide a name"),
    subject: yup.string().required("Please provide a subject"),
    message: yup.string().required("Please provide a message"),
    hobby: yup.string().required("Hobby is required"),
    checkbox: yup.bool().required("Checkbox must be accepted")
    .oneOf([true], "Checkbox must be accepted"),
  })

  const validationResult = schema
    .validate(values, { abortEarly: false })
    .then(() => {
      alert(JSON.stringify(values, null, 2));
    })
    .catch((err) => {
      console.log(err.errors);
    });

 