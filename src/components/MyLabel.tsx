import './mylabel.css';
export interface MyLabelProps {
	/**
	 * Este es el mensaje a mostrar en la etiqueta
	 */
	label: string;
	/**
	 * Este es el tamaño de la etiqueta
	 */
	size: 'normal' | 'h1' | 'h2' | 'h3';
	/**
	 * Si quiere todo capitalizado
	 */
	allCaps?: boolean;
	/**
	 * Colores del botón
	 */
	color?: 'primary' | 'secondary' | 'tertiary';
	/**
	 * Colores de la fueente
	 */
	fontColor?: string;
}
export const MyLabel = ({
	label = 'No Label',
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor,
}: MyLabelProps) => {
	return (
		<span
			className={`label ${size} text-${color}`}
			style={{ color: fontColor }}
		>
			{allCaps ? label.toLocaleUpperCase() : label}
		</span>
	);
};
