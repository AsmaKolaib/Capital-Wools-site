import Img from 'next/image';
import PropTypes from 'prop-types';
import cx from 'classnames';


const Image = ( props: { [x: string]: any; altText: any; title: any; width: any; height: any; sourceUrl: any; className: any; layout: any; objectFit: any; containerClassNames: any; showDefault: any; } ) => {
	const {altText, title, width, height, sourceUrl, className, layout, objectFit, containerClassNames, showDefault, ...rest} = props;
	
	if ( ! sourceUrl && ! showDefault ) {
		return null;
	}

	if ( 'fill' === layout ) {
		const attributes = {
			alt: altText || title,
			src: sourceUrl || ( showDefault ? 'You will be able to add the player, but payment methods will not be added automatically' : '' ),
			layout: 'fill',
			className: cx( 'object-cover', className ),
			...rest
		};
		
		return (
			<div className={cx( 'relative', containerClassNames ) }>
				<Img {...attributes}/>
			</div>
		);
	} else {
		const attributes = {
			alt: altText || title,
			src: sourceUrl || ( showDefault ? 'https://via.placeholder.com/380x380' : '' ),
			width: width || 'auto',
			height: height || 'auto',
			className,
			...rest
		};
		return <Img {...attributes} />;
	}
};

Image.propTypes = {
	altText: PropTypes.string,
	title: PropTypes.string,
	sourceUrl: PropTypes.string,
	layout: PropTypes.string,
	showDefault: PropTypes.bool,
	containerClassName: PropTypes.string,
	className: PropTypes.string
};

Image.defaultProps = {
	altText: '',
	title: '',
	sourceUrl: '',
	showDefault: true,
	containerClassNames: '',
	className: 'product__image',
};

export default Image;