export function isFC(component: Function): component is React.FC {
	return (
		typeof component === 'function' &&
		!(
			component.prototype &&
			component.prototype.isReactComponent
		)
	)
}