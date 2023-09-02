import './NavigationTabs.css';

export default function NavigationTabs({ list, onTabSelection, ...rest }){
	return (
		<ul className="NavigationTabs" {...rest}>
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