//글의 id값을 파라미터로 넘겨받아서 글을 삭제,수정함

import axios from "axios";

export default class Manager {
  async Dlete(id) {
    console.log(`id = ${id}`);
    const response = await axios.delete("http://localhost:3000", {
      data: `id=${id1}`,
    });
    return response.data;
  }
}
