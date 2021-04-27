import styled from 'styled-components';
import React, { FC } from 'react';

const StyledTask = styled.div`
  pre {
    padding: 9px;
    border-radius: 4px;
    background-color: black;
    color: #eee;
  }
`;

export const Task: FC = () => {
  return (
    <StyledTask>
      <h2>Coding Challange:</h2>

      <p>
        The purpose of this exercise is to evaluate your ability to write clean,
        understandable code and communicate with other developers in a pair
        programming session.
      </p>

      <p>
        You do{' '}
        <strong>
          <b>NOT</b>
        </strong>{' '}
        have to fulfill all tasks. This is not to give you any pressure or force
        you into hours of work, it can also be a good discussion about how you'd
        tackle the task, but we'd like to see some code 🤓
      </p>

      <p>Task:</p>

      <ol>
        <li>
          <p>
            Extend this React with the functionality to convert any given amount
            of money 1 &lt; n &lt; 1000 from USD to EUR using the API mentioned
            below.
          </p>
        </li>

        <li>
          <p>Write basic unit test for a single component.</p>
        </li>

        <li>
          <p>Write basic e2e test</p>
        </li>

        <li>
          <p>
            Draw a line chart representing the value of the conversion in last
            30 days using any chart library (eg. https://d3js.org)
          </p>
        </li>
      </ol>

      <p>
        During working on the task you are welcome to use any available
        resources (also Google) and libraries. You are also expected to
        communicate frequently with the interviewers, commenting on your
        engineering choices. Feel free to ask questions at any time.
      </p>

      <h2>The Backend API:</h2>
      <p>
        We've prepared a backend for you to use in the folder{' '}
        <code>apps/server</code>, try calling:
      </p>

      <pre>GET http://localhost:3333/api/currency/USD</pre>

      <p>
        You can find the types for this API in the following file:{' '}
        <code>libs\contract\src\lib\CurrencyConversionRates.ts</code>
      </p>
    </StyledTask>
  );
};
