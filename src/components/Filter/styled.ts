import styled from "styled-components";

export const FilterWrapper = styled.div`
  font-size: 1rem;

  .toggle-btn {
    padding: 0.5em 2em;

    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: green;
    cursor: pointer;
    display: inline-block;
    font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
    padding: .5rem 1.2rem;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
      transform: scale(1.05) rotate(-1deg);
    }
  }

  /* > button {
    margin-bottom: 2em;
  } */
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0 0;
  > button {
    &:not(:last-child) {
      margin-right: 0.5em;
    }
  }
  
  button {
    padding: 1em 2em;
    background: #efefef;
    border: none;
    border-radius: .5rem;
    color: #444;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .2rem;
    text-align: center;
    outline: none;
    cursor: pointer;
    transition: .2s ease-in-out;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, .7),
                -6px -6px 10px rgba(255, 255, 255, .5),
                6px 6px 8px rgba(255, 255, 255, .075),
                6px 6px 10px rgba(0, 0, 0, .15);
  }

  button:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .6),
                -2px -2px 4px rgba(255, 255, 255, .4),
                2px 2px 2px rgba(255, 255, 255, .05),
                2px 2px 4px rgba(0, 0, 0, .1);
  }
  button:active,
  button.active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, .7),
                inset -2px -2px 4px rgba(255, 255, 255, .5),
                inset 2px 2px 2px rgba(255, 255, 255, .075),
                inset 2px 2px 4px rgba(0, 0, 0, .15);
  }
`;
