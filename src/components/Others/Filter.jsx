import React from 'react';
import { Form, FormSelect } from 'react-bootstrap';

import './styles.css';

const Filter = ({ onChange = () => {}, filterText, sortBy, sortDir }) => {
  return (
    <>
      <div className="container-search mb-4">
        <Form.Label>Filter Generation</Form.Label>
        <div className="container-input-btn">
          <Form.Control
            className="select-list-poke"
            onChange={({ target: { value } }) => {
              onChange({
                filterText: value,
              });
            }}
            value={filterText}>
            <option value="">All Generations</option>
            <option value="1">Generation I</option>
            <option value="2">Generation II</option>
            <option value="3">Generation III</option>
            <option value="4">Generation IV</option>
            <option value="5">Generation V</option>
            <option value="6">Generation VI</option>
            <option value="7">Generation VII</option>
            <option value="8">Generation VIII</option>
            <option value="9">Generation IX</option>
          </Form.Control>
        </div>
      </div>
      <div className="container-search mb-4">
        <Form.Label>Sort</Form.Label>
        <div className="container-input-btn">
          <Form.Control
            className="select-list-poke"
            onChange={({ target: { value } }) => {
              onChange({
                sortBy: value,
              });
            }}
            value={sortBy}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="poke_id">Number</option>
          </Form.Control>
          <Form.Control
            className="select-list-poke"
            onChange={({ target: { value } }) => {
              onChange({
                sortDir: value,
              });
            }}
            value={sortDir}>
            <option value="">Sort Direction</option>
            <option value="asc">ASE</option>
            <option value="desc">DESC</option>
          </Form.Control>
        </div>
      </div>
    </>
  );
};

export default Filter;
