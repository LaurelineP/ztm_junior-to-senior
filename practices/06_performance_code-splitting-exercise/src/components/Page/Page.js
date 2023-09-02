import './Page.css'

export function Page({ children, ...rest }){
	return (
		<div className = "Page" {...rest}>
			{children}
		</div>
	)
}