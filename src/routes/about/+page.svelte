<script>
  export let data;

  async function handleLogin(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    // console.log('tt:', form, formData, email, password)
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-type': 'application/json'
      }
    });

    if (res.ok) {
      console.log('successed login',res)
    } else {
      console.log('failed login')
    }
  }
</script>

<form on:submit={handleLogin}>
  <input name="email" type="email" required/>
  <input name="password" type="password" required/>
  <button type="submit">Log in</button>
</form>

<h1>{data.title}</h1>

<style>
  h1 {
    font-size: 20px;
  }
</style>