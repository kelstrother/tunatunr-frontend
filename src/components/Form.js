import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.song);
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    setFormData(props.song);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  React.useEffect(() => {
    setFormData(props.song);
  }, [props.song]);

  return (
    <div className="form-container">
      <div className="form-title">
        Add a song. <span>No fishy business</span>
      </div>
      <form className="form-body" autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.title}
          placeholder="song title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          id="artist"
          value={formData.artist}
          placeholder="artist name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="album"
          id="album"
          value={formData.album}
          placeholder="album name"
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="time"
          id="length"
          value={formData.time}
          placeholder="song duration"
          onChange={handleChange}
        /> */}
        <input className="form-submit" type="submit" value="Krillin' It" />
      </form>
    </div>
  );
};

export default Form;
