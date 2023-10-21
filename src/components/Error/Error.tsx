function Error() {
  return (
    <>
      <h1>ERROR</h1>
      <h3>Enter a valid input to the URL</h3>
      (i.e. &nbsp;
      <a
        href={`http://${window.location.hostname}:${window.location.port}/?q=100,45,21,60,24`}
      >
        http://{window.location.hostname}:{window.location.port}
        /?q=100,45,21,60,24
      </a>
      )
    </>
  )
}

export default Error
