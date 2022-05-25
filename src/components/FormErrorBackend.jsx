const FormErrorBackend = ({ error }) => {
  return (
    <>
      <div className="alert alert-danger" role="alert">
        {error.message}
      </div>
    </>
  );
};

export default FormErrorBackend;
