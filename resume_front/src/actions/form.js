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
export const form = (first_name, last_name, middle_name, job_title, city, country, phone, address, email, date_of_birthday, photo, about_me, hobbies) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        email,
        first_name,
        last_name,
        middle_name,
        phone,
        photo,
        country,
        city,
        address,
        date_of_birthday,
        job_title,
        about_me,
        hobbies
    });
    dispatch(load_form());
    try {
        const id = load_form().map(u => u.id)
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/resume/main-info/?${id}`, body, config);

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