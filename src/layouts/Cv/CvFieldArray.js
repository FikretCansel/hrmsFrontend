import React from 'react'
import * as Yup from "yup";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";

export default function CvFieldArray({values,placeholder,fieldName}) {
    return (
        <div>
            <FieldArray
            name={fieldName}
            render={arrayHelpers => {
              const users = values;
              return (
                <div>
                  {users && users.length > 0
                    ? users.map((user, index) => (
                        <div key={index}>
                          <Field
                            placeholder={placeholder}
                            name={`${fieldName}.${index}.name`}
                            
                          />
                          <ErrorMessage name={`users.${index}.name`} />
                          <br />


                          <br />

                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                          >
                            -
                          </button>
                          <br />
                          <br />
                        </div>
                      ))
                    : null}
                  <button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        name: "",
                      })
                    } // insert an empty string at a position
                  >
                    add a User
                  </button>
                  <br />
                  <br />
                  <br />
                  <div>
                    <button type="submit">Form Submit</button>
                  </div>
                </div>
              );
            }}
          />
        </div>
    )
}
