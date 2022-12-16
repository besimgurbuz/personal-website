/** Dispatch event on click outside of node */
export function clickOutside(node: Node, ignoreNode: Node | null = null) {
	const handleClick = (event: Event) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			if (ignoreNode && !ignoreNode.contains(event.target as Node)) {
				node.dispatchEvent(new CustomEvent('click_outside', node as CustomEventInit));
			}
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
