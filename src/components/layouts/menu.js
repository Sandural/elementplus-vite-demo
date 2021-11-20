// 菜单数据
import { h } from 'vue';
import { Edit } from '@element-plus/icons';

function renderIcon(icon) {
	return h(icon, null, null)
}

export default [
	{
		id: '1',
		name: 'DashBoard',
		path: 'home',
		icon: renderIcon(Edit),
		children: []
	},
	{
		id: '2',
		name: 'Demo1',
		path: 'demo',
		icon: renderIcon(Edit),
		children: [
			{
				id: '2-1',
				name: 'Demo1-1',
				path: '/demo',
				icon: "",
				children: []
			}
		]
	}
]
