import { Link } from 'react-router-dom'

function IconButton({ icon: Icon, label, to, variant = 'default', ...props }) {
  const className = `c-icon-button c-icon-button--${variant}`
  const icon = <Icon aria-hidden="true" />

  if (to) {
    return (
      <Link className={className} to={to} aria-label={label} title={label}>
        {icon}
      </Link>
    )
  }

  return (
    <button className={className} type="button" aria-label={label} title={label} {...props}>
      {icon}
    </button>
  )
}

export default IconButton