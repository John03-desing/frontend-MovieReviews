function FormField({ id, label, as: Control = 'input', type = 'text', value, maxLength, ...props }) {
  const typeProps = Control === 'input' ? { type } : {}

  return (
    <div className="c-form-field">
      <label className="c-form-field__label" htmlFor={id}>{label}</label>
      <Control
        className="c-form-field__input"
        id={id}
        value={value}
        maxLength={maxLength}
        {...typeProps}
        {...props}
      />
      {maxLength && value !== undefined && (
        <span className="c-form-field__counter">{value.length}/{maxLength}</span>
      )}
    </div>
  )
}

export default FormField