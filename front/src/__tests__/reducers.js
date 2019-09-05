import reducers from "../reducers/rootReducer";

describe("dataReducer", () => {
  it("SET_DATA action returns the state with the same object passed in", () => {
    let state;
    let initialState = { data: [] };
    state = reducers(
      { appReducer: initialState },
      {
        type: "SET_DATA",
        payload: {
          data: [
            {
              title: "Pets in Cambridge",
              data: {
                cat: 55,
                dog: 14,
                lizard: 37,
                elephant: 3,
                fish: 6,
                lion: 10,
                parrot: 2
              }
            }
          ]
        }
      }
    );
    expect(state).toEqual({
      appReducer: {
        data: [
          {
            title: "Pets in Cambridge",
            data: {
              cat: 55,
              dog: 14,
              lizard: 37,
              elephant: 3,
              fish: 6,
              lion: 10,
              parrot: 2
            }
          }
        ]
      }
    });
  });

  it("SET_DATA action returns an empty array in state.data if empty object is passed in", () => {
    let state;
    let initialState = { data: [] };
    state = reducers({ appReducer: initialState }, {});
    expect(state).toEqual({
      appReducer: {
        data: []
      }
    });
  });
});
