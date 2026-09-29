function FormField({ id, label, type = 'text', ...props }) {
  return (
    <div className="c-form-field">
      <label className="c-form-field__label" htmlFor={id}>{label}</label>
      <input className="c-form-field__input" id={id} type={type} {...props} />
    </div>
  )
}

export default FormField