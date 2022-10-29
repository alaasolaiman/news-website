import { useLayoutEffect, useRef } from "react";

import "./index.css";

const Header = () => {
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const mainHeader = document.getElementsByClassName("header");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader[0].classList.add("fixedTop");
      } else {
        mainHeader[0].classList.remove("fixedTop");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);
  return (
    <header className="header" ref={stickyHeader}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        exercitationem quos vel atque repellat necessitatibus eaque neque!
        Explicabo architecto cum maiores dolorem minima perspiciatis amet, odio
        quaerat error praesentium eligendi consectetur nisi, omnis ipsa rem
        accusamus illo vel quisquam sint accusantium! Voluptatum omnis eos
        dolorem, exercitationem iusto maxime delectus debitis eligendi
        accusantium officia modi veritatis provident aliquid praesentium maiores
        natus non eaque corrupti! Recusandae beatae tempore minus tenetur porro
        illo! Perferendis veniam alias minima voluptates rem itaque, nobis
        placeat quaerat. Modi error consequuntur autem. At dicta quidem odio,
        expedita sit, labore similique, neque eos blanditiis magni quasi nam
        quas itaque numquam exercitationem eum. Exercitationem asperiores ut
        architecto enim quisquam, molestiae minima magnam. Quams ducimus quasi
        sed repellendus, placeat cum quibusdam quos! Praesentium, excepturi eum.
        Nisi neque aperiam recusandae voluptatibus minima excepturi ipsum,
        soluta id suscipit aliquid molestias voluptates animi consequatur
        possimus ab. Officia modi dolorem iure ex veniam repudiandae dolore
        officiis sunt voluptatibus numquam earum tempora et quam deserunt,
        accusamus optio fuga atque vel reprehenderit quasi esse dicta veritatis
        ipsam laudantium! Dolore ratione quos dignissimos nihil, perspiciatis
        reprehenderit eaque accusantium excepturi quidem doloribus enim
        molestiae! Cum fuga, qui voluptate at eveniet omnis ullam voluptates,
        esse amet nobis ratione placeat iste possimus perferendis, debitis
        commodi maxime sunt fugiat ipsa! Perferendis excepturi at vel voluptate
        possimus, dolorem a, ut officiis quis praesentium ipsum sit sunt
        nesciunt porro recusandae nam et ducimus sequi natus assumenda modi quos
        quidem! Provident dolorem consequatur aliquam molestiae maiores at enim
        rerum, necessitatibus, reiciendis adipisci placeat laboriosam sit. Hic,
        reprehenderit rerum placeat quaerat laborum voluptatem aliquam. Ex, illo
        laudantium, reiciendis repudiandae odit ipsam magni fugit at maxime
        inventore itaque quas rem dolore maiores. Neque dicta vel cumque eum
        voluptatum doloremque dignissimos saepe tempora laudantium quod facilis,
        ad repellat nihil vero odio autem. Atque obcaecati expedita eum earum
        odio illum modi ducimus, laborum dignissimos similique accusamus in
        maiores natus amet quo soluta exercitationem debitis aliquid eveniet
        incidunt quisquam assumenda. Unde blanditiis tempore dolores impedit
        iste officiis debitis dolorum, voluptatibus ipsam! Autem numquam quis
        explicabo? Perspiciatis ab laudantium rem laboriosam, eligendi nulla
        molestiae eius iste commodi voluptate veritatis eos sunt beatae mollitia
        quia, tempore id culpa numquam dolorum deleniti aliquam hic illum eum
        eveniet. Unde quidem, eos ipsam pariatur distinctio, quam perspiciatis
        minima illo perferendis odio deserunt atque, aperiam quod exercitationem
        tenetur officiis quos? Natus a in, consequatur et atque officia neque
        modi suscipit amet adipisci enim dolor quis illum nisi quasi accusamus
        eveniet. Beatae quo dolores omnis animi rerum dolorum? Neque tenetur
        alias ea. Id fugit ratione ab eveniet. Unde nesciunt placeat atque
        dicta, veniam commodi voluptate laborum. Quod molestias aperiam
        recusandae et nostrum voluptas, ullam voluptatibus sed reiciendis in?
        Laudantium, ut deserunt autem velit quas quo corrupti. Rem natus
        necessitatibus distinctio pariatur, impedit error ut omnis eos illum
        temporibus similique, voluptatibus nobis tempora modi, reprehenderit
        consectetur ea quod minima cum dolorum aut consequatur atque? Voluptas
        eum iste magni ducimus, impedit voluptatem nam fuga accusamus culpa
        autem esse velit quisquam expedita delectus commodi incidunt laboriosam
        nulla minus obcaecati neque assumenda porro molestias in cum. Pariatur
        laboriosam delectus nostrum sed necessitatibus architecto, quasi tempore
        nemo, dolorum sit consequatur laborum amet libero voluptatem quo
        excepturi vel nam dicta. Ipsa harum fugiat quasi voluptate eveniet
        tenetur explicabo enim, tempora iste eos quae corporis, totam impedit
        dolores cupiditate ut maxime, debitis vel animi. Harum excepturi iure
        provident quis voluptas voluptatem quibusdam in, expedita, optio ratione
        similique sit placeat, vitae dolorem reprehenderit recusandae impedit
        necessitatibus voluptates. Quis iste libero similique culpa, minima
        explicabo fuga illo suscipit sunt perferendis veritatis labore quisquam
        eius doloremque voluptates error sit praesentium accusamus rerum. Sint,
        numquam eveniet? Recusandae voluptate eum minus deleniti, incidunt iusto
        quo. Dicta provident, modi dolores quidem maxime quos iste fugit qui
        incidunt aperiam deleniti reiciendis nulla laudantium, dolore accusamus
        cupiditate optio ad perferendis, esse aliquid! Quae consectetur ea odit,
        sint atque distinctio delectus. Corporis, exercitationem id alias dolor
        tempora repellendus, ratione praesentium officia animi dolores
        laudantium nemo dolore incidunt iure dolorum quas velit molestias
        consectetur est adipisci nostrum, tenetur voluptatem. Nobis amet
        repellendus suscipit corporis distinctio ratione tenetur quidem alias,
        fugiat sapiente nesciunt quam accusantium veritatis repudiandae unde,
        totam quasi iure non voluptates harum facilis nemo culpa reprehenderit?
        Quos delectus qui eius eum aliquid consequuntur accusantium expedita.
        Tenetur corrupti repellat ipsa eius officia porro laborum neque nihil,
        quas, libero quo eaque consequatur incidunt enim inventore earum
        officiis, adipisci facere delectus repellendus! At inventore odio
        consequuntur maiores facere sunt deleniti molestiae atque dolorum illum.
        Aliquam ad quam nisi autem sunt perspiciatis ullam similique quasi?
        Soluta hic voluptatem cupiditate et excepturi consequatur necessitatibus
        deleniti quibusdam praesentium repellendus! Dolorum, minima provident.
        Pariatur, tempore. Quis, soluta enim corrupti aliquam, laborum ratione
        in esse aspernatur omnis, tempore unde at. Reprehenderit nemo unde minus
        animi blanditiis delectus odio minima nihil. Animi aliquam est
        voluptatem quo ipsum, ullam tempora quaerat autem consequatur debitis
        excepturi iusto reprehenderit eligendi inventore non veniam sequi, quia
        placeat dignissimos vel magni perspiciatis maiores praesentium! Quod
        quaerat, debitis a fugit delectus, quisquam illo facilis quia eligendi
        quo, omnis tenetur molestiae. Hic fuga pariatur veniam similique
        aspernatur quisquam magni minima dolore beatae placeat non iusto
        reprehenderit dolorem deleniti vel sit, iste amet exercitationem id
        excepturi atque animi rem praesentium! Sed veritatis nisi, delectus,
        laborum perspiciatis laudantium obcaecati saepe dicta itaque neque
        corrupti quod debitis odio voluptate exercitationem. Laudantium, ratione
        architecto deserunt ex dolore veniam optio alias numquam fuga doloribus,
        repellat delectus voluptatum possimus ab laboriosam! Nobis modi saepe
        debitis eaque eveniet error in rerum maxime suscipit dolore vitae
        architecto assumenda hic repellat consequatur, consectetur amet iure
        tenetur animi cum placeat? Dolor nostrum, architecto enim tempora
        voluptatum eligendi perspiciatis ullam esse temporibus doloremque sit
        ipsa rem aliquid dicta beatae, quam autem. Odio unde similique fugiat ex
        accusamus mollitia recusandae veniam quasi dolores, consequatur iure
        debitis suscipit molestiae deleniti atque nam incidunt explicabo harum.
        Tempora ex nesciunt doloremque voluptatibus fuga veniam placeat fugit
        eveniet dolor molestiae beatae sequi, cupiditate architecto voluptates
        corporis facilis, doloribus suscipit mollitia eos obcaecati impedit
        consequatur. Eum facere expedita doloribus voluptatum possimus obcaecati
        sit dolore! Voluptatibus, repellendus.
      </p>
    </header>
  );
};

export default Header;
