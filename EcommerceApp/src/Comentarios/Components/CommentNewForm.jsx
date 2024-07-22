import React from "react";
import { useForm } from "../../Hooks/useForm";
import { useComments } from "../../Hooks/useComments";


export const CommentNewForm = ({ handleCloseComment, productId,addComment}) => {
  console.log('se renderiza CommentNewForm')
  const { form, content,product, handleOnChange, handleSubmit, handleReset } =
    useForm({ content: "", product: productId });

  const accionTrasSubmit = () => {
    console.log('tras submit',form)
    addComment(form);
    handleReset();
  };

  const onHandleSubmit = (e) => {
    handleSubmit(e, accionTrasSubmit);
  };

  const onHandleReset = () => {
    handleReset();
  };

  return (
    <form onSubmit={onHandleSubmit} onReset={onHandleReset} className="mt-4">
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Contenido
        </label>
        <input
          value={content}
          onChange={handleOnChange}
          required
          type="text"
          className="form-control"
          id="content"
          name="content"
          placeholder="Introduce el Comentario"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button type="reset" className="btn btn-danger">
        Reset
      </button>
      <button onClick={handleCloseComment} className="btn btn-danger mx-5">
        x
      </button>
    </form>
  );
};
