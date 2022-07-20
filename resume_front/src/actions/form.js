import axios from "axios";
import {FORM_ERROR, FORM_SUCCESS} from "./types";

export const load_form = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };

        try {

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/resume/main-info/`, config);

            dispatch({
                type: FORM_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: FORM_ERROR
            });
        }
    } else {
        dispatch({
            type: FORM_ERROR
        });
    }
};
export const form_save = (first_name, last_name, middle_name, vacancy, city, country, phone, additional_address_info, email, date_of_birth, photo, about_me, hobbies) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const id = load_form().map(u => u.id)
    console.log(id)

    const body = JSON.stringify({
        email,
        first_name,
        last_name,
        middle_name,
        phone,
        photo,
        country,
        city,
        additional_address_info,
        date_of_birth,
        vacancy,
        about_me,
        hobbies
    });
    dispatch(load_form());
    try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/resume/main-info/${id}`, body, config);

        dispatch({
            type: FORM_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: FORM_ERROR
        })
    }
};