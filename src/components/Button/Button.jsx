function Button({ variant = 'primary', icon: Icon, children, ...props }) {
  return (
    <button className={`c-button c-button--${variant}`} type="button" {...props}>
      {Icon && <Icon className="c-button__icon" aria-hidden="true" />}
      {children}
    </button>
  )
}

export default Button