<template>
  <div class="single-tooth border text-center">
    <svg
      id="CHID_DENT_all"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57.69 100"
      :style="`transform: rotate(${selectedTooth.alignement.distalTilting? selectedTooth.alignement.distalTilting: selectedTooth.alignement.mesialTilting}deg)`"
    >
      <g id="CHID_DENT_H_all">
        <g id="CHID_DENT_H">
          <path
            id="CHID_DENT_ROOT_H"
            v-if="selectedTooth.dent.root1"
            d="M295,229.12c-2.95-.33-9.47,9.6-14.25,16.86a132,132,0,0,0-7.46,13.07c-8,15.2-7.52,18.16-5.09,18.94,1.71.56,3-.45,8.14-.36A43.21,43.21,0,0,1,289.24,280c9.22,2.89,11.11,6,12.9,5.68,3.85-.7-5.72-14.9-7.3-32.91C293.62,238.73,297.84,229.43,295,229.12Z"
            transform="translate(-254.31 -226.5)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.62"
          />
          <path
            id="CHID_DENT_CROWN_H"
            v-if="selectedTooth.dent.crown1"
            :class="[
                { 'tooth-removable': selectedTooth.removable },
                { 'tooth-bridge': selectedTooth.crown.bridge },
                { 'tooth-laminateVeneer': selectedTooth.crown.laminateVeneer },
                { 'tooth-denture': selectedTooth.crown.denture },
                { 'tooth-onlay': selectedTooth.crown.onlay },
                { 'tooth-postCrown': selectedTooth.crown.postCrown },
                { 'tooth-full-veneer': selectedTooth.crown.fullVeneer },
                { 'thooth-extraction': selectedTooth.extraction },
              ]"
            d="M268.37,278.71c-2,.82-2,1.7-4.41,5.14-2.19,3.11-2.46,2.73-5.77,7.21-2.68,3.65-3.19,4.85-3.05,6.32a5.76,5.76,0,0,0,1.7,3.6c1.53,1.62,4,2.58,9,4.42,4.77,1.78,7.76,2.87,12.39,3.52a27,27,0,0,0,6.95.36c3.12-.32,3.45-1.07,8.32-2.44,4.41-1.23,5.33-.94,8.48-2.16,3.57-1.38,4.4-2.53,4.58-2.79.39-.58.35-.91.34-2.8,0-3.9.16-3.55,0-4.6a10.47,10.47,0,0,0-1.36-4.24,16.08,16.08,0,0,0-3-3.51c-3.55-3.08-11.55-7.31-22.91-8.48C275.85,277.88,271.55,277.43,268.37,278.71Z"
            transform="translate(-254.31 -226.5)"
            fill="none"
            stroke="#1d1d1b"
            stroke-miterlimit="10"
            stroke-width="1.62"
          />
        </g>
        <path
          id="CHID_DENT_fiiling-caries_class_I_H"
          v-if="selectedTooth.filling_caries_class_i"
          d="M286,308.63l-4.5.09a35.6,35.6,0,0,1-5.57-.83c-.45-.1-1.59-.4-3.87-1l-1.56-.4c0-.73-.09-1.91-.15-3.39-.09-2.48-.07-3.28,1-3.87a7.54,7.54,0,0,1,3.35-.63h12.61c2.62,0,4.73,1.12,4.73,2.51v5.45c-1,.29-2,.62-3.11,1S286.93,308.28,286,308.63Z"
          transform="translate(-254.31 -226.5)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_fiiling_caries_class_IV_Mesial_H"
          v-if="selectedTooth.filling_caries_class_iv_mesial"
          d="M270.2,306.06l-6.8-2.28a19.12,19.12,0,0,1-2.32-1.07,10.3,10.3,0,0,1-4.8-4.78l.46-3.45c.94-1.1,1.87-2.22,2.79-3.38.65-.81,1.26-1.62,1.86-2.41h3.81c2.94,0,5.32,1.26,5.32,2.82v13.23C270.41,305.18,270.31,305.62,270.2,306.06Z"
          transform="translate(-254.31 -226.5)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_IV_Distal_H"
          v-if="selectedTooth.filling_caries_class_iv_distal"
          d="M292.51,306.39c-1.28-.18-.23-3.22-.35-7a35.53,35.53,0,0,0-.73-6.87c-.45-1.77-.95-2.94.41-3.71,1-.59,2.63-.63,5.81-.71,2.46-.06,4.37-.09,5.48.58a3.21,3.21,0,0,1,1.08,1.32,6.59,6.59,0,0,1,.67,1.63c.16.55.12.58.41,1.86a12,12,0,0,1,.33,1.54,10.85,10.85,0,0,1,0,1.59c0,1.23,0,1.85,0,2.29a8.7,8.7,0,0,1,.17,1.63,2.43,2.43,0,0,1-.58,1.68,9.46,9.46,0,0,1-2.74,1.46,20.31,20.31,0,0,1-2.58,1c-.36.11-1.29.32-3.15.75-1.63.37-1.55.34-2.32.53A9.15,9.15,0,0,1,292.51,306.39Z"
          transform="translate(-254.31 -226.5)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
          opacity="0.79"
        />
        <rect
          id="CHID_DENT_filling_caries_Class_V_H"
          v-if="selectedTooth.filling_caries_class_v"
          x="17.89"
          y="55.3"
          width="18.3"
          height="2.72"
          rx="0.87"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Mesial_H"
          v-if="selectedTooth.filling_caries_class_iii_mesial"
          d="M305.52,294.76l-7.27.51c-2.05,0-3.72-.88-3.72-2v-1.14c0-1.1,1.67-2,3.72-2l6.13.58h0l.14.09C304.86,292.16,305.19,293.46,305.52,294.76Z"
          transform="translate(-254.31 -226.5)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_filling_caries_Class_III_Distal_H"
          v-if="selectedTooth.filling_caries_class_iii_distal"
          d="M266.4,295.27h-3.5l-5.53-1h0l2.89-3.48h0l6.14-.59c2.05,0,3.72.88,3.72,2v1.14C270.12,294.39,268.45,295.27,266.4,295.27Z"
          transform="translate(-254.31 -226.5)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
          opacity="0.79"
        />
        <path
          id="CHID_DENT_EndoH"
          v-if="selectedTooth.endo.endo1 || selectedTooth.pulp.pulp1"
          :fill="selectedTooth.endo.endo1 ? '#be1622' : '#e67e22'"
          :stroke="selectedTooth.endo.endo1 ? '#e30613' : '#e67e22'"
          d="M291.73,235.8c-5.83-.61-22.79,39.89-17.17,40.92.32.06,1.1.06,3.72.31s3.78.36,5.15.61a40.8,40.8,0,0,1,5.73,1.52h0s3.14,1.64,4.29,1.52c2.89-.31.22-12.49-.86-21C290.45,242.75,294.12,236.05,291.73,235.8Z"
          transform="translate(-254.31 -226.5)"
          stroke-miterlimit="10"
          stroke-width="0.54"
        />
        <g id="CHID_DENT_Post_H" v-if="selectedTooth.post.post1">
          <path
            d="M275.47,278.32l14.39,1c.54,0,.92.39.87.77l-.37,2.78a.93.93,0,0,1-1.06.63l-14.39-1c-.53,0-.92-.39-.87-.77l.37-2.78A.94.94,0,0,1,275.47,278.32Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M286.3,245.82l1.81.13c.95.07,1.64.68,1.54,1.36l-4.2,31.15a1.64,1.64,0,0,1-1.87,1.12l-1.82-.13c-.94-.07-1.63-.68-1.54-1.36l4.2-31.15A1.65,1.65,0,0,1,286.3,245.82Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M278.77,271.84l9.84.71c.27,0,.46.19.43.38l-.12.89c0,.19-.26.33-.52.31l-9.84-.71c-.27,0-.46-.18-.43-.37l.12-.9C278.27,272,278.51,271.82,278.77,271.84Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M279.25,267.08l9.91.72c.24,0,.42.17.4.35l-.13.94c0,.18-.24.31-.49.29l-9.9-.71c-.25,0-.43-.18-.4-.36l.12-.94A.46.46,0,0,1,279.25,267.08Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M280.06,262.35l9.83.71c.26,0,.46.19.43.38l-.12.88c0,.2-.26.34-.53.32l-9.83-.71c-.26,0-.46-.19-.43-.38l.12-.89C279.55,262.47,279.79,262.33,280.06,262.35Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M280.52,257.59l9.93.71c.24,0,.41.18.39.35l-.13,1c0,.17-.24.3-.48.29l-9.92-.72c-.24,0-.42-.17-.39-.35l.13-.95A.41.41,0,0,1,280.52,257.59Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M281.15,252.84l10,.72c.23,0,.4.16.38.33l-.13,1a.4.4,0,0,1-.46.28l-9.88-.71c-.28,0-.47-.2-.45-.39l.13-.92A.4.4,0,0,1,281.15,252.84Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M282,248.11l9.83.7c.27,0,.46.19.43.39l-.12.88a.46.46,0,0,1-.52.32l-9.84-.71c-.26,0-.46-.19-.43-.39l.12-.88A.47.47,0,0,1,282,248.11Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="26.53"
            y1="26.41"
            x2="37.79"
            y2="22.41"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="26.4"
            y1="27.82"
            x2="37.65"
            y2="23.81"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="25.85"
            y1="31.2"
            x2="37.04"
            y2="27.14"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="25.72"
            y1="32.53"
            x2="36.86"
            y2="28.57"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="25.43"
            y1="35.9"
            x2="36.4"
            y2="31.89"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="25.23"
            y1="37.32"
            x2="36.25"
            y2="33.3"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="24.6"
            y1="40.67"
            x2="35.92"
            y2="36.7"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="24.46"
            y1="42.07"
            x2="35.67"
            y2="38.08"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="24.12"
            y1="45.41"
            x2="35.12"
            y2="41.39"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="23.96"
            y1="46.82"
            x2="34.89"
            y2="42.83"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M292.16,250.61"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M277.35,281.82l9.81.71c1,.07,1.8.75,1.7,1.51l-.45,3.37a1.82,1.82,0,0,1-2.08,1.23l-9.8-.7c-1-.08-1.81-.75-1.71-1.51l.46-3.37A1.83,1.83,0,0,1,277.35,281.82Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
        </g>
        <g id="CHID_DENT_Ginfivitis_H">
          <path
            id="CHID_DENT_Left_Ginfivitis_H"
            v-if="selectedTooth.ginfivitis.left"
            d="M263,283.64c.79-.08.07-1.38,1.85-3,1.24-1.15,2.64-1.5,2.47-2.3-.13-.56-.9-.66-1.54-1.39a2.28,2.28,0,0,1-.31-2.45c1.62-5.5,1.59-5.45,1.69-5.66,2-4,2.26-3.77,3.55-6.63,1.46-3.24,1-3.39,2.31-5.49,1.55-2.49,3-3.65,2.31-4-.94-.46-5,.6-7.86,2.13-6.67,3.59-1.61,7.14-6.32,16.22-1.5,2.9-3.4,5.2-2.15,8.43C259.81,281.7,261.93,283.75,263,283.64Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            id="CHID_DENT_Right_Ginfivitis_H"
            v-if="selectedTooth.ginfivitis.right"
            d="M308,292.73c-.9-.08.16-1.78-2-3.77-1.46-1.34-3.53-2-3.08-2.95.18-.38.59-.4,1.08-.9a2.18,2.18,0,0,0,.31-2.54c-1-2.52-1.26-5.12-2.47-7.61a56.65,56.65,0,0,1-3.24-8.85c-.88-3.32-.38-3.09-1.38-7.21-1.1-4.49-2.12-6.45-1.24-6.63s3.85,2.13,5.71,4.09c2.53,2.69,4.16,5.63,5.39,12,1.8,9.36-.52,9,1.85,12.7,1.45,2.27,3.52,4.3,2.77,7.29C311.07,290.73,309,292.82,308,292.73Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            id="CHID_DENT_Left_periodontal_H"
            v-if="selectedTooth.periodontal.left"
            d="M263,283.64c.79-.08.07-1.38,1.85-3,1.24-1.15,2.64-1.5,2.47-2.3-.13-.56-.9-.66-1.54-1.39a2.28,2.28,0,0,1-.31-2.45c1.62-5.5,1.59-5.45,1.69-5.66,2-4,2.26-3.77,3.55-6.63,1.46-3.24,1-3.39,2.31-5.49,1.55-2.49,3-3.65,2.31-4-.94-.46-5,.6-7.86,2.13-6.67,3.59-1.61,7.14-6.32,16.22-1.5,2.9-3.4,5.2-2.15,8.43C259.81,281.7,261.93,283.75,263,283.64Z"
            transform="translate(-254.31 -226.5)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            id="CHID_DENT_Right_periodontal_H"
            v-if="selectedTooth.periodontal.right"
            d="M308,292.73c-.9-.08.16-1.78-2-3.77-1.46-1.34-3.53-2-3.08-2.95.18-.38.59-.4,1.08-.9a2.18,2.18,0,0,0,.31-2.54c-1-2.52-1.26-5.12-2.47-7.61a56.65,56.65,0,0,1-3.24-8.85c-.88-3.32-.38-3.09-1.38-7.21-1.1-4.49-2.12-6.45-1.24-6.63s3.85,2.13,5.71,4.09c2.53,2.69,4.16,5.63,5.39,12,1.8,9.36-.52,9,1.85,12.7,1.45,2.27,3.52,4.3,2.77,7.29C311.07,290.73,309,292.82,308,292.73Z"
            transform="translate(-254.31 -226.5)"
            fill="#e67e22"
            stroke="#e67e22"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            id="CHID_DENT_Left_perio_H"
            v-if="selectedTooth.perio.left"
            d="M263,283.64c.79-.08.07-1.38,1.85-3,1.24-1.15,2.64-1.5,2.47-2.3-.13-.56-.9-.66-1.54-1.39a2.28,2.28,0,0,1-.31-2.45c1.62-5.5,1.59-5.45,1.69-5.66,2-4,2.26-3.77,3.55-6.63,1.46-3.24,1-3.39,2.31-5.49,1.55-2.49,3-3.65,2.31-4-.94-.46-5,.6-7.86,2.13-6.67,3.59-1.61,7.14-6.32,16.22-1.5,2.9-3.4,5.2-2.15,8.43C259.81,281.7,261.93,283.75,263,283.64Z"
            transform="translate(-254.31 -226.5)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            id="CHID_DENT_Right_perio_H"
            v-if="selectedTooth.perio.right"
            d="M308,292.73c-.9-.08.16-1.78-2-3.77-1.46-1.34-3.53-2-3.08-2.95.18-.38.59-.4,1.08-.9a2.18,2.18,0,0,0,.31-2.54c-1-2.52-1.26-5.12-2.47-7.61a56.65,56.65,0,0,1-3.24-8.85c-.88-3.32-.38-3.09-1.38-7.21-1.1-4.49-2.12-6.45-1.24-6.63s3.85,2.13,5.71,4.09c2.53,2.69,4.16,5.63,5.39,12,1.8,9.36-.52,9,1.85,12.7,1.45,2.27,3.52,4.3,2.77,7.29C311.07,290.73,309,292.82,308,292.73Z"
            transform="translate(-254.31 -226.5)"
            fill="#c0392b"
            stroke="#c0392b"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
        </g>
        <g id="CHID_DENT_Implant_H" v-if="selectedTooth.implant">
          <path
            d="M263.62,276.11l35,0c1.29,0,2.33.4,2.32.89l-.12,3.49c0,.48-1.08.88-2.38.87l-35,0c-1.3,0-2.34-.39-2.32-.88l.12-3.49C261.25,276.51,262.32,276.11,263.62,276.11Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M280.53,234.75H285c2.3,0,4.14.7,4.11,1.56l-1.32,39.12c0,.86-1.91,1.55-4.21,1.55h-4.42c-2.3,0-4.14-.7-4.11-1.56l1.32-39.12C276.35,235.44,278.24,234.75,280.53,234.75Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M269.73,267.77l24,0c.64,0,1.15.2,1.14.44l0,1.12c0,.24-.53.43-1.17.43l-24,0c-.64,0-1.15-.19-1.14-.43l0-1.12C268.57,268,269.1,267.77,269.73,267.77Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M269.55,261.81l24.12,0c.59,0,1.07.18,1.06.41l0,1.17c0,.23-.5.41-1.09.41l-24.12,0c-.59,0-1.07-.18-1.06-.41l0-1.17C268.47,262,269,261.81,269.55,261.81Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M270.16,255.85l23.92,0c.65,0,1.17.2,1.16.44l0,1.11c0,.24-.54.44-1.19.44l-23.92,0c-.65,0-1.17-.2-1.16-.44l0-1.11C269,256.05,269.51,255.85,270.16,255.85Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M269.94,249.89l24.15,0c.58,0,1.05.18,1,.4l0,1.19c0,.22-.48.39-1.07.39l-24.15,0c-.59,0-1.06-.18-1.05-.4l0-1.19C268.87,250.07,269.35,249.89,269.94,249.89Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M270.11,243.93l24.21,0c.57,0,1,.17,1,.38l0,1.22c0,.21-.47.38-1,.38l-24.05,0c-.66,0-1.19-.2-1.18-.44l0-1.16C269.07,244.1,269.54,243.93,270.11,243.93Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M270.75,238l23.94,0c.65,0,1.16.2,1.15.44l0,1.12c0,.24-.54.43-1.19.43l-23.93,0c-.65,0-1.16-.19-1.16-.44l0-1.11C269.58,238.16,270.11,238,270.75,238Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="15.07"
            y1="17.54"
            x2="41.11"
            y2="11.59"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="15.14"
            y1="19.31"
            x2="41.18"
            y2="13.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="14.77"
            y1="23.56"
            x2="40.65"
            y2="17.54"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="14.85"
            y1="25.23"
            x2="40.62"
            y2="19.34"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="15.11"
            y1="29.45"
            x2="40.44"
            y2="23.51"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="15.01"
            y1="31.22"
            x2="40.48"
            y2="25.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="14.43"
            y1="35.45"
            x2="40.63"
            y2="29.52"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="14.51"
            y1="37.2"
            x2="40.43"
            y2="31.27"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="14.62"
            y1="41.39"
            x2="40.04"
            y2="35.43"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <line
            x1="14.63"
            y1="43.16"
            x2="39.9"
            y2="37.25"
            fill="#e30613"
            stroke="#e30613"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M296,240.19"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
          <path
            d="M269.14,280.31l23.87,0c2.54,0,4.57.78,4.54,1.73l-.14,4.23c0,.95-2.12,1.72-4.66,1.72l-23.87,0c-2.54,0-4.57-.77-4.54-1.73l.14-4.23C264.51,281.08,266.6,280.31,269.14,280.31Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="0.54"
          />
        </g>
        <path
          id="CHID_DENT_Periapical_H"
          v-if="selectedTooth.periapical.periapical1"
          d="M280.18,245c.58.05,1.3-2.5,4.19-6.68,2.69-3.9,2.95-3,4.29-5.36a11.55,11.55,0,0,1,3.76-3.77,4.91,4.91,0,0,1,2.36-.74,3.53,3.53,0,0,1,1.4.17,1,1,0,0,1,.64,1.14c-.08,1.28.42,2.57,0,3.83-.71,2.13-.46,4.33-.75,6.5-.63,4.75-.64,5.32-.32,5.36.67.08,2.47-2.23,3.43-4.5.86-2,.32-2.32,1-5.6.73-3.68,1.64-4.44.54-5.93a6.78,6.78,0,0,0-4.75-2.66c-3.37-.32-6.5,1.82-8.57,3.23a16.42,16.42,0,0,0-6.12,7.53,15.36,15.36,0,0,0-1.18,3.88C280,241.64,279.52,245,280.18,245Z"
          transform="translate(-254.31 -226.5)"
          fill="#be1622"
          stroke="#be1622"
          stroke-miterlimit="10"
          stroke-width="0.54"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_H"
          v-if="selectedTooth.crown.occlusalVeneer"
          d="M287.55,308a18.6,18.6,0,0,1-5.62.78,16.92,16.92,0,0,1-7-1.47,44,44,0,0,1-5.48-1.43,31.89,31.89,0,0,1-6-2.62l-4.93-1.88c-1.29-.4-1.77-1.07-1.39-1.47a2,2,0,0,1,1.08-.41H303a4.55,4.55,0,0,1,2.16.41c.87.53.73,1.57-.73,2.32l-4.65,2.35c-1.84.4-3.81.88-5.86,1.44C291.58,306.63,289.45,307.3,287.55,308Z"
          transform="translate(-254.31 -226.5)"
          fill="#e30613"
          stroke="#e30613"
          stroke-miterlimit="10"
          stroke-width="1.62"
        />
        <path
          id="CHID_DENT_Occlusal_Veneer_H"
          v-if="selectedTooth.crown.onlay"
          d="M287.55,308a18.6,18.6,0,0,1-5.62.78,16.92,16.92,0,0,1-7-1.47,44,44,0,0,1-5.48-1.43,31.89,31.89,0,0,1-6-2.62l-4.93-1.88c-1.29-.4-1.77-1.07-1.39-1.47a2,2,0,0,1,1.08-.41H303a4.55,4.55,0,0,1,2.16.41c.87.53.73,1.57-.73,2.32l-4.65,2.35c-1.84.4-3.81.88-5.86,1.44C291.58,306.63,289.45,307.3,287.55,308Z"
          transform="translate(-254.31 -226.5)"
          fill="#FFC0CB"
          stroke="#FFC0CB"
          stroke-miterlimit="10"
          stroke-width="1.62"
        />
        <g id="CHID_DENT_Endo_Crown_H">
          <path
            id="CHID_DENT_Endo_Crown_1H"
            v-if="selectedTooth.endo_crown.crown1"
            d="M289.52,293l-17.63.22-2.73,5.58c-.07.13.12.26.38.26h23c.27,0,.46-.13.38-.27Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.62"
          />
          <path
            id="CHID_DENT_Endo_Crown_2H"
            v-if="selectedTooth.endo_crown.crown2"
            d="M287.59,307.83a18.66,18.66,0,0,1-5.62.78,16.83,16.83,0,0,1-7-1.47,44.09,44.09,0,0,1-5.49-1.43,32.5,32.5,0,0,1-6-2.62l-4.93-1.88c-1.28-.4-1.76-1.07-1.38-1.47a2,2,0,0,1,1.08-.41h44.77a4.57,4.57,0,0,1,2.16.41c.87.53.72,1.57-.74,2.32l-4.64,2.36c-1.85.4-3.81.87-5.87,1.43C291.62,306.5,289.48,307.17,287.59,307.83Z"
            transform="translate(-254.31 -226.5)"
            fill="#e30613"
            stroke="#e30613"
            stroke-miterlimit="10"
            stroke-width="1.62"
          />
        </g>
      </g>
    </svg>
    <span class="text-center my-3">H</span>
  </div>
</template>
<script>
export default {
    props:["selectedTooth"]
}
</script>
<style  lang="scss" scoped>
.single-tooth{
    width:100% ;
    height:100% ;
    position: relative;
    svg {
      width: 100%;
      height: 100%;
    }
    span {
      background: $tradmark-color;
      text-align: center;
      width:45px;
      height: 45px;
      font-size: 22px;
      font-weight: 500;
      padding: 10px;
      border-radius: 20px;
      color:#FFF;
      position: absolute;
      line-height: 1.3;
      bottom: -35px;
      left: 40%;
    }
}
</style>