import { execSync } from 'child_process';

export function getBlamed(fileName: string, line: number) {
  let out = execSync(`git blame --line-porcelain -L ${line},+1 -- ${fileName}`).toString()
  let data = out.split("\n");
  return {
    "author": data[1].substr("author".length +1 ),
    "author-mail": data[2].substr("author-mail".length +1 ),
    "author-time": data[3].substr("author-time".length +1 ),
    "author-tz": data[4].substr("author-tz".length +1 ),
    "committer": data[5].substr("committer".length +1 ),
    "committer-mail": data[6].substr("committer-mail".length +1 ),
    "committer-time": data[7].substr("committer-time".length +1 ),
    "committer-tz": data[8].substr("committer-tz".length +1 ),
    "summary": data[9].substr("summary".length +1 ),
    "previous": data[10].substr("previous".length +1 ),
    "filename": data[11].substr("filename".length +1 ),
    };
}

// console.log(getBlamed("index.ts", 5))

