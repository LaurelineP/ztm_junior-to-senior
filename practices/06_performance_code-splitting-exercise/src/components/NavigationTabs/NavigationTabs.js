import './NavigationTabs.css';

export function NavigationTabs({ list, onTabSelection }){
	return (
		<ul className="NavigationTabs">
			{list.map((item, idx) => (
				<li
					key={`navigation-item-${idx}`}
					id={item.id}
					className="NavigationTabs-item"
					onClick={onTabSelection}
					>
					{item.title}
				</li>
			))}
		</ul>
	)
}