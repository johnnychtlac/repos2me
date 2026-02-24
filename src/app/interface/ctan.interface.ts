interface IPkgs {
    id: string;
    subtitle: string;
    date?: string;
    labels: string[];
    docpaths?: string[];
}

interface ICtan {
    site: string;
    pkgs: IPkgs[];
}

export type { ICtan };
