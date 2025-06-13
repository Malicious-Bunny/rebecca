import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export function VendorContact() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-lg border border-gray-200 dark:border-neutral-700 transition-colors">
      <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-6 transition-colors">Contact Rebecca to Purchase</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
        Interested in this beautiful reborn doll? Contact Rebecca directly to discuss pricing, customization options, and availability.
      </p>

      <div className="space-y-4">
        {/* SMS */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <PhoneIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors">SMS</p>
            <a
              href="sms:+1234567890"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              +1 (234) 567-8900
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <EnvelopeIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors">Email</p>
            <a
              href="mailto:rebecca@rebeccasreborns.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              rebecca@rebeccasreborns.com
            </a>
          </div>
        </div>

        {/* Facebook */}
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors">Facebook</p>
            <a
              href="https://facebook.com/rebeccasreborns"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Rebecca's Reborns
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-neutral-700 transition-colors">
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
          Response time: Usually within 24 hours
        </p>
      </div>
    </div>
  );
}
