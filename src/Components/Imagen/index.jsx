import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentDots, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';

function Imagen(props){

    const {largeImageURL, likes, previewURL, tags, comments, downloads} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"/>
                <div className="card-body">
                    <div className="info">
                        <p className="card-text">{likes} <FontAwesomeIcon className="iconFont" icon={faThumbsUp} /></p>
{/*                         <p className="card-text">{views} <FontAwesomeIcon icon={faEye} /></p> */}
                        <p className="card-text">{comments} <FontAwesomeIcon className="iconFont" icon={faCommentDots} /></p>
                        <p className="card-text">{downloads} <FontAwesomeIcon className="iconFont" icon={faCloudArrowDown} /></p>
                    </div>
                    <a href={largeImageURL} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">Ver Imágen</a>
                </div>
            </div>
        </div>
    )
}

export default Imagen;