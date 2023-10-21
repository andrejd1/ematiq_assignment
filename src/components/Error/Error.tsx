function Error() {
  return (
    <>
      <h1>ERROR</h1>
      <h3>Please enter a valid input to the URL!</h3>
      <h3>Each value must be in range &lt;0; 100&gt;</h3>
      (i.e. &nbsp;
      <a
        href={`http://${window.location.hostname}:${window.location.port}/?q=100-45-21-60-24`}
      >
        http://{window.location.hostname}:{window.location.port}
        /?q=100-45-21-60-24
      </a>
      )
    </>
  )
}

export default Error
