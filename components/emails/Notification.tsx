const Notification = () => {
  return (
    <body>
      <EmailStyle />
      <h1 className="title"> hello me and hello you hohoh </h1>
    </body>
  );
};

const EmailStyle = () => {
  const __html = `
      .title{
        background-color:red;
      }
    `;
  return <style dangerouslySetInnerHTML={{ __html }} />;
};

export default Notification;
