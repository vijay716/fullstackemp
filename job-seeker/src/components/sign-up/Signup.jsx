import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    education: '',
    college: '',
    marks: '',
    role: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Example of sending a POST request with Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('education', formData.education);
    data.append('college', formData.college);
    data.append('marks', formData.marks);
    data.append('role', formData.role);
    if (formData.resume) {
        data.append('resume', formData.resume);
    }

    try {
        const response = await axios.post('http://localhost:8081/signup/insert', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log('User data submitted successfully:', response.data);
    } catch (error) {
        console.error('Error submitting user data:', error);
    }
}; 

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="education">Highest Education</Label>
            <Input
              id="education"
              name="education"
              placeholder="Your Education"
              type="text"
              value={formData.education}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="clg">College/University</Label>
            <Input
              id="clg"
              name="college"
              placeholder="Your College/University"
              type="text"
              value={formData.college}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="grade">Marks/CGPA</Label>
            <Input
              id="grade"
              name="marks"
              placeholder="Your Marks/CGPA"
              type="text"
              value={formData.marks}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="role">Role</Label>
            <Input
              id="role"
              name="role"
              placeholder="Role"
              type="text"
              value={formData.role}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="file-upload">
            <Label for="file">Resume</Label>
            <Input
              id="file"
              name="resume"
              type="file"
              onChange={handleFileChange}
            />
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" className="form-check-input" />
            <Label check>Check me out</Label>
          </FormGroup>
          <Button type="submit" className="btn-submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
