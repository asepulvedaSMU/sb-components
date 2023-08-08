import { Meta, StoryFn } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
	// carpeta/nombrecomponente
	title: 'UI/MyLabel',
	// componente tsx a utilizar
	component: MyLabel,
	tags: ['autodocs'],
	argTypes: {
		size: { control: 'select' },
		color: { control: 'select' },
		fontColor: { control: 'color' },
	},
} as Meta<typeof MyLabel>;

// Referencia a componente a utilizar
const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />;

//historias o paginas del componente
export const Basic = Template.bind({});
Basic.args = {
	size: 'normal',
	allCaps: true,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
	size: 'normal',
	color: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
	size: 'normal',
	color: 'secondary',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
	size: 'normal',
	color: 'tertiary',
};
export const CustomFontColor = Template.bind({});
Tertiary.args = {
	size: 'h1',
	fontColor: '#5517ac',
};
