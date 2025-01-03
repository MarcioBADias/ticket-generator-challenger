const App = () => {
  return (
    <>
      <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      <h2>Secure your spot at next year's biggest coding conference.</h2>
      <div className="uploadZone">
        <h3>Upload Avatar</h3>
        <p>
          Drag and drop or click to upload Upload your photo (JPG or PNG, max
          size: 500KB).
        </p>
        <form action="">
          <label>Full Name</label>
          <input type="text" autoFocus />
          <label>Email Address</label>
          <input type="text" placeholder="example@email.com" />
          <label>GitHub Username</label>
          <input type="text" placeholder="@yourusername" />
          <button type="submit">Generate My Ticket</button>
        </form>
        <footer class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/MarcioBADias">Marcio Dias</a>.
        </footer>
      </div>
    </>
  )
}

export { App }
