export function StatsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making a real difference in communities
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our platform has helped citizens report issues and drive meaningful change
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Reports Submitted</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-red-600">2,500+</dd>
            </div>
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Issues Resolved</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-red-600">1,800+</dd>
            </div>
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Projects Initiated</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-red-600">350+</dd>
            </div>
            <div className="flex flex-col bg-gray-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Communities Served</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-red-600">120+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}