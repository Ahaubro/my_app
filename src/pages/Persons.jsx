import React from "react";

const Persons = () => {
    return(
        <>
            <br></br>
            <h1 className="display-3 text-secondary"> Persons </h1>
            <br></br>
            <br></br>


            <div style={{display: "flex", justifyContent: "center"}}>

                <table className="table w-50">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Age </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thor</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Arex</td>
                            <td>27</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
};

export default Persons;