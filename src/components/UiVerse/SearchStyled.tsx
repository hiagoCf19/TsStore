import styled from "styled-components";

const StyledSearch = styled.div`
  --input-line: #cccccc;
  --input-text-color: #808080;
  --input-text-hover-color: transparent;
  --input-border-color: #5cd2e6;
  --input-border-hover-color: #999999;
  --input-bg-color: #333333;
  --search-max-width: 250px;
  --search-min-width: 150px;
  --border-radius: 5px;
  --transition-cubic-bezier: 150ms cubic-bezier(0.4, 0, 0.2, 1);

  .search-box {
    max-width: var(--search-max-width);
    min-width: var(--search-min-width);
    height: 35px;
    border: 1px solid var(--input-border-color);
    border-radius: var(--border-radius);
    padding: 5px 15px;
    background: var(--input-bg-color);
    box-shadow: 0 0 14px rgba(92, 210, 230, 0.4);
    transition: var(--transition-cubic-bezier);
  }

  /*Section input*/
  .search-field {
    position: relative;
    width: 100%;
    height: 100%;
    left: -5px;
    border: 0;
  }

  input {
    width: calc(100% - 29px);
    height: 100%;
    border: 0;
    border-color: transparent;
    font-size: 1rem;
    padding-right: 0px;
    color: var(--input-line);
    background: var(--input-bg-color);
    border-right: 2px solid var(--input-border-color);
    outline: none;
  }

  .input::-webkit-input-placeholder {
    color: var(--input-text-color);
  }

  .input::-moz-input-placeholder {
    color: var(--input-text-color);
  }

  .input::-ms-input-placeholder {
    color: var(--input-text-color);
  }

  .input:focus::-webkit-input-placeholder {
    color: var(--input-text-hover-color);
  }

  .input:focus::-moz-input-placeholder {
    color: var(--input-text-hover-color);
  }

  .input:focus::-ms-input-placeholder {
    color: var(--input-text-hover-color);
  }

  /*Search button*/
  .search-box-icon {
    width: 52px;
    height: 35px;
    position: absolute;
    top: -6px;
    right: -21px;
    background: transparent;
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    transition: var(--transition-cubic-bezier);
  }

  .search-box-icon:hover {
    background: var(--input-border-color);
  }

  .btn-icon-content {
    width: 52px;
    height: 35px;
    top: -6px;
    right: -21px;
    background: transparent;
    border: none;
    cursor: pointer;
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    transition: var(--transition-cubic-bezier);
    opacity: 0.4;
  }

  .btn-icon-content:hover {
    opacity: 0.8;
  }

  .search-icon {
    width: 21px;
    height: 21px;
    position: absolute;
    top: 7px;
    right: 15px;
  }
`;

export const SearchStyled = () => {
  return (
    <StyledSearch>
      <div className="search">
        <div className="search-box">
          <div className="search-field">
            <input placeholder="Search..." className="input" type="text" />
            <div className="search-box-icon">
              <button className="btn-icon-content">
                <i className="search-icon">
                  <svg
                    xmlns="://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      fill="#fff"
                    ></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledSearch>
  );
};
