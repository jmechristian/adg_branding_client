import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'project',
  initialState: {
    allProjects: [],
    filterValue: { name: 'Corporate', value: 'corporate' },
    filteredGrid: [],
  },
  reducers: {
    setAllprojects: (state, action) => {
      state.allProjects = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setFilteredGrid: (state, action) => {
      state.filteredGrid = state.allProjects.filter((project) => {
        const projectTypes = project.attributes.project_types.data;
        return projectTypes.some(
          (projectType) =>
            projectType.attributes.type === state.filterValue.name
        );
      });
    },
  },
});

export const { setAllprojects, setFilterValue, setFilteredGrid } =
  filterSlice.actions;

export default filterSlice.reducer;
