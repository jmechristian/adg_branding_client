import React, { useEffect } from 'react';
import ProjectItem from '../layout/ProjectItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredGrid } from '../../data/filterSlice';
import _ from 'lodash';

const ProjectGrid = () => {
  const dispatch = useDispatch();
  const { allProjects, filteredGrid, filterValue } = useSelector(
    (state) => state.filter
  );

  useEffect(() => {
    dispatch(setFilteredGrid());
  }, [allProjects, filterValue]);

  const orderedGrid = _.orderBy(filteredGrid, [(o) => o.attributes.grid_order]);
  console.log(orderedGrid);

  return (
    <div className='mt-6 mb-10 lg:mt-8 lg:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5'>
      {orderedGrid.length > 0 ? (
        orderedGrid.map((proj) => (
          <ProjectItem
            name={proj.attributes.name}
            location={proj.attributes.location}
            id={proj.id}
            hero={
              proj.attributes.hero.data
                ? proj.attributes.hero.data.attributes.url
                : 'https://adg-projects.nyc3.digitaloceanspaces.com/d510c4975f36df4b67a706957c4cf046.png'
            }
            key={proj.id}
          />
        ))
      ) : (
        <div className='text-lg w-full text-center col-span-3 py-10'>
          No projects returned.
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
