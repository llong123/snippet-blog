import Code from "./Code";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Snippets({ snippet, snippetDeleted, email }) {
  const deleteSnippet = async () => {
    try {
      await fetch("/api/deleteSnippet", {
        method: "DELETE",
        body: JSON.stringify({ id: snippet.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      snippetDeleted();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.cont}>
      <p className={styles.lang}>{snippet.data.language}</p>
      <h3 className={styles.name}>{snippet.data.name}</h3>
      <p className={styles.descp}>{snippet.data.description}</p>

      <Code snippet={snippet} />
      {email == snippet.data.mail && (
        <>
          <div className={styles.links}>
            <Link href={`/edit/${snippet.id}`}>
              <a>Edit</a>
            </Link>
            <a onClick={deleteSnippet}>Delete</a>
          </div>
        </>
      )}
    </div>
  );
}

export default Snippets;
