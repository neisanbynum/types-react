export function isFC(component: Function): component is React.FC {
	return component.prototype && component.prototype.isReactComponent
}