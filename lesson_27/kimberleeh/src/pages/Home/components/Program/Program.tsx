import './Program.scss';
import React, {Key, PropsWithChildren} from 'react';

export interface ProgramProps extends PropsWithChildren {
  id: Key | null | undefined;
  title: string;
}

export const Program: React.FC<ProgramProps> = ({title, children}: ProgramProps) => {
    return (<li className="program">
        <h3>{title}</h3>
        {children}
      </li>);
};