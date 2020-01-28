import React from 'react';
import implement, {Interface, type} from 'implement-js';

class ContentBox extends React.Component{

	textSizeProcessor(text_size){
		console.log(text_size);
	    return "font-" + text_size;
	}

	render(){
		const {image_position, image_source, title, content, ...lainlain} = this.props;
	    return <div>
	            {image_position === "top" && <img src={image_source} alt="gambar_konten"/>}
		            <span className={"block bold " + this.textSizeProcessor(lainlain.text_size)}>{title}</span>
		            <p>{content}</p>
		            <a>{lainlain.link_text}</a>
	            {image_position === "bottom" && <img src={image_source} alt="gambar_konten"/>}
	        </div>
	}
}

export default ContentBox;