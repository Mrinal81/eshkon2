import React from 'react';
import { formatDate } from '../../lib/utils/index';

interface DateComponentProps {
  dateString: string;
  options?: Intl.DateTimeFormatOptions;
  className?: string;
}

const DateComponent: React.FC<DateComponentProps> = ({ dateString, options = {}, className, ...rest }) => {
  return (
    <time dateTime={dateString} className={className} {...rest}>
      {formatDate(dateString, options)}
    </time>
  );
}

export default DateComponent;
