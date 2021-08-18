<script>
  import emailjs from 'emailjs-com';
  let values = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  let errors = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  let success = {
    message: '',
  };

  let valid = false;
  const isEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  // const tester = () => {
  //   console.log(isEmail(values.email));
  // };

  const handleSubmit = (e) => {
    valid = true;

    //validera namn
    if (values.name.trim().length === 0) {
      valid = false;
      errors.name = 'Fältet kan inte lämnas blankt';
    } else {
      errors.name = '';
    }
    //validera subject
    if (values.subject.trim().length < 3) {
      valid = false;
      errors.subject = 'Ämnet bör vara minst 3 tecken långt';
    } else {
      errors.subject = '';
    }
    //validera message
    if (values.message.trim().length < 10) {
      valid = false;
      errors.message = 'Meddelandet kan inte vara kortare än 10 tecken';
    } else {
      errors.message = '';
    }
    //validera email
    if (!isEmail(values.email)) {
      console.log('hejh');
      valid = false;
      errors.email = 'Skriv en giltig mailadress';
    } else {
      console.log('valid');
      errors.email = '';
    }

    if (valid) {
      console.log('Validation success');
      emailjs
        .sendForm(
          'contact_service',
          'contact_form',
          e.target,
          'user_Ps6qN7jtGg6vS1h8nTiaX'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text);
            //rensar formuläret
            Object.keys(values).forEach((v) => (values[v] = ''));
            success.message = 'Ditt meddelande har skickats!';
          },
          (error) => {
            console.log('FAILED...', error);
            success.message = 'Something went wrong';
          }
        );
    }
  };
</script>

<!-- <div>
  <Form class="contact-form" on:submit={handleOnSubmit}>
    <label for user_name>Name</label>
    <input class="input" type="text" name="user_name" />
    <label for user_email>Email</label>
    <input class="input" type="email" name="user_email" />
    <label for message>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </Form>
</div> -->
<div class="container">
  <h1>Kontakta mig</h1>
  <form class="contact-form" on:submit|preventDefault={handleSubmit}>
    <div>
      <input
        type="text"
        name="email"
        bind:value={values.email}
        placeholder="Email"
      />
      <div class="errors">
        {errors.email}
      </div>
    </div>
    <div>
      <input
        type="text"
        name="name"
        bind:value={values.name}
        placeholder="Namn"
      />
      <div class="errors">
        {errors.name}
      </div>
    </div>
    <div>
      <input
        type="text"
        name="subject"
        bind:value={values.subject}
        placeholder="Ämne"
      />
      <div class="errors">
        {errors.subject}
      </div>
    </div>
    <div>
      <textarea
        type="text"
        name="message"
        bind:value={values.message}
        placeholder="Meddelande"
      />
      <div class="errors">
        {errors.message}
      </div>
    </div>
    <div class="success">{success.message}</div>
    <button type="submit">Skicka</button>
  </form>
  <!-- <button on:click={tester}>TEST</button> -->
  <div />
</div>

<style>
  .container {
    display: flex;
    height: 80vh;
  }
  h1 {
    padding-top: 2rem;
  }

  form {
    margin: auto;
    padding: 2rem;
    min-width: 500px;
  }
  form input,
  textarea {
    padding: 0.5rem;
    width: 100%;
    margin-top: 1rem;
  }
  button {
    width: 100%;
  }
  /* form textarea {
    padding: 0.5rem;
  } */
  .errors {
    font-size: 0.8rem;
    font-weight: bold;
    color: red;
  }
</style>
