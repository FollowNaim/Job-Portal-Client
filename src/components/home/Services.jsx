import Service from "./Service";

function Services({ jobs }) {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h4 className="text-3xl font-bold">Jobs of the day</h4>
        <p className="pt-2 text-primary/70">
          Most viewed and all-time top-selling services
        </p>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {jobs?.map((job) => (
            <Service key={job._id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
