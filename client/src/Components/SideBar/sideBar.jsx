import React from 'react';
import './sideBar.css'

const SideBar = ({ filterByTypes }) => {
    return (
        <div className="custom-radios">
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="fairy" name="color" value="fairy" />
                <label for="fairy">
                    <span>
                        
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="water" name="color" value="water" />
                <label for="water" >
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="flying" name="color" value="flying" />
                <label for="flying">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="fire" name="color" value="fire" />
                <label for="fire">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="poison" name="color" value="poison" />
                <label for="poison">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="ground" name="color" value="ground" />
                <label for="ground">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="electric" name="color" value="electric" />
                <label for="electric">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="grass" name="color" value="grass" />
                <label for="grass">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="bug" name="color" value="bug" />
                <label for="bug">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="normal" name="color" value="normal" />
                <label for="normal">
                    <span>
                    </span>
                </label>
            </div>
            <div>
                <input onChange={(e) => filterByTypes(e)} className='input' type="radio" id="all" name="color" value="all" />
                <label for="all">
                    <span>
                    </span>
                </label>
            </div>
        </div>
    );
}

export default SideBar;