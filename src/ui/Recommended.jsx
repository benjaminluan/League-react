import React from 'react';

const Recommended = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="recommended">
                    <h1 className="recommended__header">Our Recommended Champions!</h1>
                    <div className="friends__recommendation--container">
                        <div className="friends__recommendation">
                            <h2 className="friends__name"></h2>
                            <figure className="champion__img--wrapper">
                                <img src="./assets\img\champion\loading\Draven_0.jpg" alt="" className="champion__img" />
                            </figure>
                            <p className="friend__para"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommended;
